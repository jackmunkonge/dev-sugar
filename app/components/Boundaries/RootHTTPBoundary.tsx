import { useCatch } from "@remix-run/react";

import sadJar from "@assets/images/sadJar.png";

import RootBoundary from "./RootBoundary";

const RootHTTPBoundary = () => {
  let title = "Oh no!";
  let heading = "The server request failed";
  let image = sadJar;
  let message = "Please refresh or try again later";
  const caught = useCatch();

  console.error(caught);
  // TODO: Add more personalised error pages
  switch (caught.status) {
    case 500:
      title = "Network Error";
      heading = "There was an internal server error";
      break;
    case 403:
      title = "Forbidden";
      heading = "You're not supposed to be here!";
      message = "Try again with the correct priveleges";
      break;
    case 404:
      title = "Not Found";
      heading = "The resource you're looking for wasn't found...";
      break;
    case 400:
      title = "Bad Request";
      heading = "You've requested a resource with the wrong request";
      break;
    case 401:
      title = "Unauthorised";
      heading = "You're not logged in right now";
      message = "Please log in and try again";
      break;

    default:
      break;
  }

  return <RootBoundary title={`Dev Sugar | ${title}`} heading={heading} image={image} message={message} />;
};

export default RootHTTPBoundary;
