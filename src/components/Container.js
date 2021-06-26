import Card from './Card';
const Container = () => {

    return(
        <div className="container mt-4">
            <div className="row vh-100 justify-content-center align-items-center">
                    <div className="col-4">
                        <Card />
                    </div>
                </div>    
        </div>
    )
}

export default Container;