import React from 'react';
import RestoServiceContext from '../resto-service-context';

const WithRestoService = () => (Wrapped) => { //принимает компонент Wrapped, в него могут передаваться
    return (props) => {   //какие-то пропсы
        return (   //внутри прячем реализацию consumer, внутри будет рендериться переданные в HOC компонент (Wrapped). 
                //из контекста мы получаем сервис, в wrapped передаются все пропсы и непосредственно RestoService, в него передано через контекст то,
                //что придет от Provider
            <RestoServiceContext.Consumer> 
                {
                    (RestoService) => {
                        return <Wrapped {...props} RestoService={RestoService}/>
                    }
                }
            </RestoServiceContext.Consumer>
        );
    };
};

export default WithRestoService;