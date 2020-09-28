import React from "react";
import { newContextComponents } from "@drizzle/react-components";

const { AccountData, ContractData, ContractForm } = newContextComponents;

export default ({ drizzle, drizzleState }) => {
  // destructure drizzle and drizzleState from props
  return (
    <div className="App">

      <div className="section">
        <h2>Active Account</h2>
        <AccountData
          drizzle={drizzle}
          drizzleState={drizzleState}
          accountIndex={0}
          units="ether"
          precision={3}
        />
      </div>

      <div className="section">
        <h2>SynthFactory</h2>
        <p>
          <strong>Total Artwork: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="SynthFactory"
            method="length"
          />
          <br/>
          <strong>Owner: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="SynthFactory"
            method="owner"
          />
        </p>
        <h3>Create Artwork</h3>
        <ContractForm
          drizzle={drizzle}
          contract="SynthFactory"
          method="createArtwork"
          labels={["Supply", "Token URI", "name", "symbol"]}
        />
      </div>
    </div>
  );
};
