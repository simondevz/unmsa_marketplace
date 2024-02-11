import { Link, Outlet, useLoaderData, useNavigate } from "react-router-dom";
import { LoaderDataType } from "../types/general.types";
import { useEffect } from "react";

export default function DashboardPage() {
  const navigate = useNavigate();
  const loaderData = useLoaderData() as LoaderDataType<any>;
  console.log("loader data ==>>> ", loaderData.data);

  useEffect(() => {
    if (!loaderData.authorized)
      navigate("/login", { state: { redirect_url: "/dashboard/campaign" } });
  }, [loaderData.authorized, navigate]);

  return (
    <section className="p-2 w-full">
      <h1 className="mx-auto text-3xl font-bold text-center">
        Welcome back, {loaderData.data.user.username}
      </h1>
      <div className="flex">
        <aside className="border w-fit p-4 flex flex-col gap-4">
          <Link
            to={"create-mail"}
            className="px-8 py-2 rounded-full font-semibold outline hover:bg-slate-500/30"
          >
            Create
          </Link>
          <div className="flex flex-col gap-2">
            <Link
              to={"/dashboard"}
              className="flex px-8 py-3 hover:bg-slate-500/30"
            >
              Campaigns
            </Link>
            <Link
              to={"audience"}
              className="flex px-8 py-3 hover:bg-slate-500/30"
            >
              Audience
            </Link>
            <Link
              to={"analytics"}
              className="flex px-8 py-3 hover:bg-slate-500/30"
            >
              Analytics
            </Link>
            <Link
              to={"content"}
              className="flex px-8 py-3 hover:bg-slate-500/30"
            >
              Content
            </Link>
          </div>
        </aside>
        <main className="border w-full">
          <Outlet />
        </main>
      </div>
    </section>
  );
}
