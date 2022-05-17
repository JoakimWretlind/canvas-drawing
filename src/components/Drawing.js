import { useRef, useEffect, useState } from 'react'
import { Container, TextContainer, H1, P } from './styles';

const Drawing = () => {
    const [isDrawing, setIsDrawing] = useState(false);
    // store elements and preserve information that might be needed later
    const canvasRef = useRef(null);
    const contextRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        // for high end screens 
        canvas.width = window.innerWidth * 2;
        canvas.height = window.innerHeight * 2;
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;

        // define the 2d
        const context = canvas.getContext('2d')
        // to support all screens
        context.scale(2, 2);
        // color of the stroke
        context.strokeStyle = "black"
        // the size of the line
        context.lineWidth = 5
        // the ending of the lines
        context.lineCap = "round"
        ///
        contextRef.current = context;

    }, [])
    // when mousebutton is pressed
    // nativeEvent is the startDrawing callback
    const startDrawing = ({ nativeEvent }) => {
        const { offsetX, offsetY } = nativeEvent;
        contextRef.current.beginPath()
        contextRef.current.moveTo(offsetX, offsetY)
        setIsDrawing(true)
    }

    const finishDrawing = () => {
        contextRef.current.closePath()
        setIsDrawing(false)
    }

    const draw = ({ nativeEvent }) => {
        if (!isDrawing) {
            return
        }
        const { offsetX, offsetY } = nativeEvent;
        contextRef.current.lineTo(offsetX, offsetY)
        contextRef.current.stroke()
    }

    return (
        <Container>
            <TextContainer>
                <H1>drawing:</H1>
                <P>Press left mousebutton and start drawing</P>
            </TextContainer>
            <canvas
                style={{ border: '1px solid black' }}
                onMouseDown={startDrawing}
                onMouseUp={finishDrawing}
                onMouseMove={draw}
                ref={canvasRef}
            />
        </Container>
    );
}

export default Drawing;
