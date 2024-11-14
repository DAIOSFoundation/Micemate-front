import { PastListPageWrap } from "./pastListPageStyle";
import Pagination from "@components/shared/pagination";
import MyEventList from "@components/myEventList";
import { useMyEventQuery } from "@/api/users/users.query";
import { MyEventQueryType } from "@/type";
import { useState } from "react";

const PastListPage = () => {
  const [page, setPage] = useState<number>(1);
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("user_id");
  const data: MyEventQueryType = {
    token: token,
    user_id: userId,
    type: 4,
    page: page,
  };
  const useMyEvent = useMyEventQuery(data);
  return (
    <PastListPageWrap>
      <MyEventList list={useMyEvent.data?.data.items} />
      {useMyEvent.data?.data.total >= 4 && (
        <Pagination
          total={useMyEvent.data?.data.total}
          page={page}
          setPage={setPage}
        />
      )}
    </PastListPageWrap>
  );
};

export default PastListPage;
