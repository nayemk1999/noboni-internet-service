import React from 'react';
import './ProgressBar.css'
const ProgressBar = () => {
    return (
        <div class="row d-flex justify-content-center mt-100">
            <div class="col-md-6">
                <div class="progress bar"> <span class="progress-left"> <span class="progress-bar"></span> </span> <span class="progress-right"> <span class="progress-bar"></span> </span>
                    <div class="progress-value">37.5%</div>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;