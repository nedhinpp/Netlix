import React from "react";
import RowPost from "../RowPost/RowPost";
import Banner from "../Banner/Banner";
import {
  originals,
  action,
  trending,
  comedy,
  romance,
  horror,
  documentaries,
} from "../../urls";

function Index() {
  return (
    <div>
      <Banner />
      <RowPost url={originals} title="Netflix Originals" />
      <RowPost url={trending} title="Trending" isSmall />
      <RowPost url={action} title="Action" isSmall />
      <RowPost url={comedy} title="Comedy" isSmall />
      <RowPost url={romance} title="Romance" isSmall />
      <RowPost url={horror} title="Horror" isSmall />
      <RowPost url={documentaries} title="Documentaries" isSmall />
    </div>
  );
}

export default Index;
