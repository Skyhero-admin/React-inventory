import Navbar from "./Navbar";

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <div className="queryArea">
                <input type = "text" className="query"/>
            </div>

        </div>
    )
}

export default Dashboard;