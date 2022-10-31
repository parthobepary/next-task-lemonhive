import { useRouter } from "next/router";
import React from "react";

function index() {
  const router = useRouter();
  const { homeId } = router.query;
  const details = JSON.parse(homeId);

  return (
    <div className="px-10 md:px-32 my-10">
      <p>
        Welcome for details page {[homeId]}
        <br />
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur,
        impedit! Vero eaque soluta exercitationem repellat dolore deserunt Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quisquam quo maiores perspiciatis dolorem distinctio quia fugit velit magni quis facilis excepturi debitis porro, eveniet, architecto, et commodi consectetur animi quidem! Fugiat dolorum repellendus deleniti aspernatur sequi voluptatibus perferendis suscipit.
      </p>
      <div className="my-20 bg-gray-400">
        <p>
          <b>Name : </b>
          {details.name}
        </p>
        <p>
          <b>Details: </b>
          {details.time}
        </p>
        <p>
          <b>Distence : </b>
          {details.distance}
        </p>
        <p>Dealine : {details.deadline}</p>
      </div>
    </div>
  );
}

export default index;
