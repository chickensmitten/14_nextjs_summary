import MeetupList from "../components/meetups/MeetupList";
import { Fragment } from "react";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Home_made_sour_dough_bread.jpg",
    address: "Some Address 5, 12345, some City",
    description: "This is a first meetup!"
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Home_made_sour_dough_bread.jpg",
    address: "Some Address 5, 12345, some City",
    description: "This is a second meetup!"
  }  
]

function HomePage(props) {

  return (
    <Fragment>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  )
}

export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS
    }
  };
}

export default HomePage;
