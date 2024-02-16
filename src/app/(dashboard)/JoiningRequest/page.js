'use client'
import TeacherRow from "@/components/teacherRow/teacherRow";

const page = async () => {
  const res = await fetch("https://softmaxshop.com/user/teachers/");
  const data = await res?.json();

  const handleApprove = () => {
    alert("click");
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>id</th>
              <th>Status</th>
              <th>Name</th>
              <th>email</th>
              <th>Phone Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <TeacherRow handleApprove={handleApprove} item={item} key={item?.id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
