// import { db } from "@/db"
// import { eq } from "drizzle-orm"
// import { notFound } from "next/navigation"

// import DashboardWrapper from "@/components/dashboard/DashboardWrapper"

// import { buttonVariants } from "@/components/ui/button"
// import { projects } from "@/db/schema/projects"
// import { Link } from "lucide-react"
// import ProjectForm from "@/components/dashboard/projects/ProjectForm"

type EditProjectPageProps = {
  params: {
    projectId: string
  }
}

async function EditProjectPage({
  params: { projectId },
}: EditProjectPageProps) {
  // const project = await db.query.projects.findFirst({
  //   where: eq(projects.id, projectId),
  //   with: {
  //     projectsToCategories: { with: { category: true } },
  //   },
  // })

  // const categories = await db.query.categories.findMany()

  // if (!project || !categories) return notFound()

  return (
    <></>
    // <DashboardWrapper
    //   header="Edit Project"
    //   description="You can add/edit the project from the dashboard"
    //   sectionAction={
    //     <Link
    //       href="/admin/projects"
    //       className={buttonVariants({ variant: "dark" })}
    //     >
    //       Back
    //     </Link>
    //   }
    // >
    //   <ProjectForm project={project} categories={categories} />
    // </DashboardWrapper>
  )
}

export default EditProjectPage
