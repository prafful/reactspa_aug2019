import React from 'react';
import Menu from './menu/menu';
import Content from './content/content';

class SPAContainer extends React.Component {
    
    render() { 
        return ( 
            <div>
                <div>
                     <Menu></Menu>
                </div>   
                <div>
                    <Content></Content>
                </div>         
            </div>
         );
    }
}
 
export default SPAContainer;