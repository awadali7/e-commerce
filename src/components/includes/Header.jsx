import React, { useState } from "react";
import styled from "styled-components";
import { Search, ChevronDown, ShoppingCart } from "react-feather";

function Header() {
	const [oneActive, setOneActive] = useState(false);
	return (
		<Contaienr>
			<Left>
				<Logo>
					<img
						src={require("../asstets/images/arwa-transparent.png")}
						alt=""
					/>
				</Logo>
				<SearchBar>
					<SearchIcon>
						<Search />
					</SearchIcon>
					<input
						type="text"
						placeholder="Search for dress and brands and more..."
					/>
				</SearchBar>
			</Left>
			<Right>
				<NavBar>
					<Item onClick={() => setOneActive(!oneActive)}>
						{" "}
						<span>Awad Ali</span>
						<div>
							<ChevronDown />
						</div>
						<DropDown></DropDown>
					</Item>
					<Item>
						{" "}
						<span>Order</span>
						<div></div>
					</Item>
					<Item>
						{" "}
						<span>More</span>
						<div>
							<ChevronDown />
						</div>
					</Item>
					<Item>
						{" "}
						<span>Cart</span>
						<div>
							<ShoppingCart />
						</div>
					</Item>
				</NavBar>
			</Right>
		</Contaienr>
	);
}

export default Header;
const Contaienr = styled.div`
	padding: 0 40px;
	background: #fff;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid #ccc;
	box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
`;
const Left = styled.div`
	display: flex;
	align-items: center;
	width: 50%;
`;
const Logo = styled.div`
	width: 30%;
	margin-right: 15px;
	img {
		width: 100%;
		display: block;
	}
`;
const SearchBar = styled.div`
	display: flex;
	height: 60px;
	border: 1px solid #000;
	align-items: center;
	padding: 0 15px;

	width: 65%;
	input {
		display: inline-block;
		height: 100%;
		width: 100%;
		font-size: 24px;
		border: none;
		outline: none;
	}
`;
const SearchIcon = styled.div`
	margin-right: 10px;
`;

const Right = styled.div`
	width: 40%;
`;
const NavBar = styled.ul`
	display: flex;
	justify-content: space-around;
`;
const Item = styled.li`
	display: flex;
	cursor: pointer;
	span {
		display: inline-block;
		margin-right: 5px;
	}
`;
const DropDown = styled.div`
	display: none;
`;
