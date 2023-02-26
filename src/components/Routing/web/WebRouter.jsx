import React from "react";
import ArwaHelmet from "../../helpers/ArwaHelmet";
import Header from "../../includes/Header";
import styled from "styled-components";

function WebRouter() {
	return (
		<>
			<ArwaHelmet />
			<Container id="landing-page">
				<Header />
			</Container>
		</>
	);
}

export default WebRouter;
const Container = styled.section``;
