import EventCard from "@components/eventCard";
import { EventListWrap } from "@/app/eventList/eventListPageStyle";
import { type EventListType } from "@/type";

interface EventSearchResultProps {
  searchData: EventListType[];
}

const EventSearchResult = ({ searchData }: EventSearchResultProps) => {
  if (searchData.length === 0) {
    return (
      <div
        style={{
          color: "#fff",
          width: "100%",
          height: "500px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        검색 결과가 없습니다.
      </div>
    );
  }

  return (
    <EventListWrap className="maxframe">
      {searchData &&
        searchData.map((data: EventListType) => {
          return (
            <EventCard
              key={data.id}
              id={data.id}
              title={data.title}
              img={data.img}
              event_start_date={data.event_start_date}
              event_end_date={data.event_end_date}
              position={data.position}
              price={data.price}
              likes={data.likes}
              like_state={data.like_state}
            />
          );
        })}
    </EventListWrap>
  );
};

export default EventSearchResult;
