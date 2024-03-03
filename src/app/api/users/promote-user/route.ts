import { PromoteAdminSchema, promoteAdminSchema } from "@/features/users";
import createClient from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const cookieStore = cookies();
  const client = createClient({ cookieStore, isAdmin: true });
  const session = await client.auth.getSession();

  if (!session.data.session.user.app_metadata.isAdmin)
    return NextResponse.json(
      { message: `Only Admin allowed to do this action.` },
      { status: 500 },
    );

  const data: PromoteAdminSchema = await request.json();
  const validate = promoteAdminSchema.safeParse(data);

  if (!validate)
    return NextResponse.json(
      { message: "Error, Data validation failed." },
      { status: 500 },
    );

  const { data: userResponse } = await client.auth.admin.getUserById(
    data.userId,
  );

  if (!userResponse.user)
    return NextResponse.json(
      { message: `Error, UserId: ${data.userId} not found.` },
      { status: 500 },
    );

  console.log("userResponse", userResponse.user);

  const { data: updatedUser, error } = await client.auth.admin.updateUserById(
    data.userId,
    { app_metadata: { isAdmin: true } },
  );

  if (error)
    return NextResponse.json({ message: error.message }, { status: 500 });

  return NextResponse.json(
    {
      message: `User:${updatedUser.user.user_metadata.name} is promoted to Admin.`,
    },
    { status: 201 },
  );
}
