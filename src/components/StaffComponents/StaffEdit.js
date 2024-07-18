import { useParams } from "react-router-dom";

function StaffEdit() {
  const { staffNo } = useParams();

  return (
    <div>
      <h1>Edit Staff {staffNo}</h1>
    </div>
  );
}

export default StaffEdit;
