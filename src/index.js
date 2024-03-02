import { GameButton }  from "./components/gamebutton";
import { IconButton } from "./components/iconbutton";
import { GameIcon } from "./components/gameicon";
import { ProgressBar } from "./components/progressbar";

export default function App() {
    const customStyles = {
        top: '10%',
        left: '10%',
        right: '20%',
        bottom: '10%',
    };

    return (
        <View style={styles.container}>
          <GameButton text="test" size={"small"} customStyles={customStyles} />
		  <IconButton text="test" size={"small"} customStyles={customStyles} />
		  <GameIcon text="test" size={"small"} customStyles={customStyles} />
		  <ProgressBar  width={150} customStyles={customStyles} />
        </View>
    );
}}