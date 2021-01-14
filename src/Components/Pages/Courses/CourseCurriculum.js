import React from 'react'

import {BsCircleFill} from 'react-icons/bs'

import CoursesData from './CoursesData'

function CourseCurriculum() {

    let Curriculum = CoursesData[0].Curriculum; // This is an array comprising of Curricular Modules
    
    return (
        <div className="section-content curriculumSection">
            <h2 className="boldText">Course Curriculum</h2>
            <div className="section-content curriculum">
                {
                    Curriculum.map((item, index) => {

                        let submodules = '';
                        if(item.submodules !== null){
                            submodules = item.submodules.map((submodule, index) => {
                                return (
                                    <span>{submodule}</span>
                                );
                            })
                        }

                        let items_per_column = Math.round(submodules.length/2);

                        let submodules_style = { gridTemplateRows: 'repeat('+items_per_column+', auto)'};

                        return (
                            <>
                                {/* <div className="vertical-line-left"></div> */}
                                <div className="module">
                                    <div style={{position: 'relative', fontSize: '1.5rem'}}><span className="pinkBullet"><BsCircleFill/></span>{item.title}</div>
                                    {
                                        submodules !== '' ? <div className="submodules" style={submodules_style}>{submodules}</div> : ""
                                    }
                                </div>
                            </>
                        
                        );
                    })
                }
            </div>
        </div>
    )
}

export default CourseCurriculum
