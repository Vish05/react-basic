import React, {useState, memo} from 'react';

function Swatch({color}) {
	console.log(`Swatch ${color}`);
	return (
		<div style={{margin:2, width: 75, height: 75, backgroundColor: color}}></div>
	)
}

const MemoedSwatch = memo(Swatch);


function MemoPrimitiveType() {
	const [appRenderIndex, setAppRenderIndex] = useState(0);
	const [color, setColor] = useState("red");

	console.log(`Memo Render ${appRenderIndex}`);
    return (
    	<React.Fragment>
			<div>
				<button onClick={() => setAppRenderIndex(appRenderIndex + 1)}>
					Re-Render Memo
				</button>
			</div>
			<div>
				<button onClick={() => setColor(color === "red" ? "blue": "red")}>
					Change Color
				</button>
			</div>
			<div>
				<MemoedSwatch color={color} />
				<MemoedSwatch color={color === "red" ? "blue": "red"} />
			</div>
        </React.Fragment>
    );
}

export default MemoPrimitiveType;
