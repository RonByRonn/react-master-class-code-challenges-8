import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 10px;
`;

const Box = styled(motion.div)`
	border-radius: 8px;
	width: 300px;
	height: 200px;
	background-color: rgb(245, 153, 235);
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Button = styled(motion.button)`
	position: absolute;
	font-size: 20px;
	padding: 8px 4px;
	border-radius: 8px;
	bottom: 320px;
`;

const Circle = styled(motion.div)`
	width: 50px;
	height: 50px;

	background-color: white;
	border-radius: 50%;
	position: absolute;
`;

const Overlay = styled(motion.div)`
	width: 100%;
	height: 100%;
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const boxVariants = {
	initial: (custom: number) => ({
		originX: custom === 0 || custom === 2 ? 1 : 0,
		originY: custom === 0 || custom === 1 ? 1 : 0,
	}),
	hover: (custom: number) => ({
		scale: 1.1,
	}),
};

const buttonVariants = {
	normal: {
		color: "rgb(0, 0, 255)",
	},
	click: {
		scale: 1.2,
		color: "rgb(255, 0, 0)",
	},
};

function App() {
	const [isBtnClicked, setIsBtnClicked] = useState(false);
	const toggleSwitch = () => setIsBtnClicked((prev) => !prev);
	const [id, setId] = useState<number | null>(null);
	console.log(id);
	return (
		<Wrapper>
			<Grid>
				{[0, 1, 2, 3].map((index) => {
					if (index === 1 || index === 2) {
						return (
							<Box
								custom={index}
								layoutId={index + ""}
								key={index}
								onClick={() => setId(index)}
								variants={boxVariants}
								initial="initial"
								whileHover="hover"

								// style={{ backgroundColor: "rgb(255, 255, 255" }}

								// style={
								// 	index === 1
								// 		? { originX: "0%", originY: "100%" }
								// 		: { originX: "100%", originY: "0%" }
								// }
							>
								{(index === 1 ? !isBtnClicked : isBtnClicked) && (
									<Circle layoutId="circle" />
								)}
							</Box>
						);
					}
					return (
						<Box
							custom={index}
							layoutId={index + ""}
							key={index}
							onClick={() => setId(index)}
							variants={boxVariants}
							initial="initial"
							whileHover="hover"

							// style={{
							// 	originX: index === 0 ? "100%" : "0%",
							// 	originY: index === 0 ? "100%" : "0%",
							// }}
						/>
					);
				})}
			</Grid>

			<Button
				variants={buttonVariants}
				animate={isBtnClicked ? "click" : "normal"}
				onClick={toggleSwitch}
			>
				Switch
			</Button>
			<AnimatePresence>
				{id !== null ? (
					<Overlay
						onClick={() => setId(null)}
						initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
						animate={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
						exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
					>
						<Box
							layoutId={id + ""}
							style={{ backgroundColor: "rgb(255, 255, 255)", width: "250px" }}
						/>
					</Overlay>
				) : null}
			</AnimatePresence>
		</Wrapper>
	);
}

export default App;
