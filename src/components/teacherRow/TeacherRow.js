"use client";

const TeacherRow = ({ item, handleApprove }) => {
  return (
    <tr key={item?.id}>
      <th>{item?.id}</th>
      <td>{item?.approved_as_teacher}</td>
      <td>{item?.fullName}</td>
      <td>{item?.email}</td>
      <td>{item?.phone_number}</td>
      <td>
        <button
          onClick={handleApprove}
          className="py-3 px-6 rounded-lg hover:opacity-60 text-white bg-[#1ab69d]"
        >
          Approve
        </button>
      </td>
    </tr>
  );
};

export default TeacherRow;
