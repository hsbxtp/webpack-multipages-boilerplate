import React from 'react';
import ReactDOM from 'react-dom';

import Sidebar from '../component/Sidebar.jsx';
import Topbar from '../component/Topbar.jsx';

import '../less/component/rightContainer.less';

ReactDOM.render(
    <div>        
        <Sidebar cKey="index"/>
        <div id="rightWrap">
            <Topbar />
            <p>index</p>            
        </div>
    </div>
    , document.querySelector('#init')
)