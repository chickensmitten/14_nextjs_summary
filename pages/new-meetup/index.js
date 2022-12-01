import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { Fragment } from "react";
import Head from "next/head";
function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
       "Content-Type": "application/json" 
      }
    });

    const data = await response.json();
    console.log(data);

    router.push("/");
  }
  return (
    <Fragment>
      <Head>
        <title>Add a New Meet up</title>
        <meta 
          name="new meetup"
          content="Add a new meet up here"
          />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
  
}

export default NewMeetupPage;