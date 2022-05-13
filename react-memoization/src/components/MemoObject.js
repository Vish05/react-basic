import React, {useState, memo, useMemo} from 'react';

function Swatch({params}) {
	console.log(`Swatch ${params.color}`);
	return (
		<div style={{margin:2, width: 75, height: 75, backgroundColor: params.color}}></div>
	)
}

const MemoedSwatch = memo(Swatch, (prevProps, nextProps) => {
    return prevProps.params.color === nextProps.params.color;
});


function MemoObject() {

	const [appRenderIndex, setAppRenderIndex] = useState(0);
	const [color, setColor] = useState("red");

	console.log(`Memo Object Render ${appRenderIndex}`);
    return (
    	<React.Fragment>
			<div>
				<button onClick={() => setAppRenderIndex(appRenderIndex + 1)}>
					Re-Render UseMemo
				</button>
			</div>
			<div>
				<button onClick={() => setColor(color === "red" ? "blue": "red")}>
					Change Color
				</button>
			</div>
			<div>
				<MemoedSwatch params={{color}} />
			</div>
        </React.Fragment>
    );
}

export default MemoObject;
