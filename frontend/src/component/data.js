


const DataDetails = ({ data }) => {
    console.log(data);
    if (!data) return null; // Add null check

    return (
        <div className="datadetails">
            <h4 >Timestamp={data.ts}</h4>
            <h4>Machine_status={data.machine_status}</h4>
            <h4>Vibrations={data.vibration}</h4>
        </div>
    );
};

export default DataDetails;
