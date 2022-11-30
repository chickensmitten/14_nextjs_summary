import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails(props) {
  return (
    <MeetupDetail
      id = {props.meetupData.id}
      image = {props.meetupData.image}
      title = {props.meetupData.title}
      description = {props.meetupData.description}
      address = {props.meetupData.address}
    />
  );
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   // this runs always on a server, not during build time
//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ]
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        id: meetupId,
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Home_made_sour_dough_bread.jpg",
        title: "First Meetup",
        description: "This is our first meetup. So happy",
        address: "5th Street, 12345 City"        
      }
    }
  }
}

export default MeetupDetails;
