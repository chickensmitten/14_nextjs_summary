import Head from "next/head";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
import { Fragment } from "react";

function HomePage(props) {

  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta 
          name="description"
          content="Browse a huge list of highly active meetups!"
          />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  )
}

export async function getStaticProps() {
  // fetch data from an API
  // this data is pre-renderred in server side
  const client = await MongoClient.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTERNAME}.srxozkr.mongodb.net/meetups?retryWrites=true&w=majority`);
  const db = client.db();

  const meetupsCollection = db.collection("meetups");  

  const meetups = await meetupsCollection.find().toArray();
  
  client.close();

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      }))
    },
    revalidate: 3600
  };
}

export default HomePage;
