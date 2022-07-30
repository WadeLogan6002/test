import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR("/api/getBlogs", fetcher);
  console.log(data);
  return (
    <>
      Home
      <div>
        {data &&
          data.map((blog) => {
            return <div key={blog.id}>{blog.id}</div>;
          })}
      </div>{" "}
    </>
  );
}
