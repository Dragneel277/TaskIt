import ShowTasks from "../../components/ShowTasks";
import CreateTask from "../../components/CreateTask";
import { useState } from "react";

import "../../App.css"

function Home() {
    const [updateValue, setUpdateValue] = useState(0)


    return (
        <div className="App">
            <div className="cards">
                <CreateTask setUpdateValue={setUpdateValue} updateValue={updateValue} />

                <ShowTasks setUpdateValue={setUpdateValue} updateValue={updateValue} />
            </div>
        </div>
    );
}

export default Home;
