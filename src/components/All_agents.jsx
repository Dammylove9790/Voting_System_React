import { db } from "./config/firebase"
import { useEffect, useState } from "react"
import React from 'react'
import Footer from './common/Footer'
import Navbar from './common/Navbar'
import Sidebar from './common/Sidebar'
import { collection, getDoc, getDocs, docs, doc } from "firebase/firestore"


function All_agents() {
  const [agents, setAgents] = useState([])

  const agentsCollectionRef = collection(db, "users")

  useEffect(() => {
    const getAllAgents = async () => {
      try {
      const data = await getDocs(agentsCollectionRef);
      const grabData = data.docs.map((doc) => ({
        ...doc.data(), id:doc.id,
      }));
      setAgents(grabData)
      console.log(grabData)
      } catch (error) {
        console.log(error)
      }
    };
    getAllAgents();
  }, []);
  


    return (
        <body class="hold-transition sidebar-mini layout-fixed">
      <div class="wrapper">        

        {<Navbar/>}        
    
        
        {<Sidebar />}
        
        <div class="content-wrapper">
      
      <section class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1>List of Registered Party Agents</h1>
            </div>
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active">Agents</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      
      <section class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-header">
                  <h3 class="card-title text-danger">
                    <span class="text-lg">
                      <i class="nav-icon fas fa-users"></i>
                      <b class="mr-2">JAG</b>
                    </span>
                    Party Agents DataTable
                  </h3>
                </div>
                {agents}
                <div class="card-body">
                  <table id="example1" class="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Ward</th>
                        <th>Unit</th>
                        <th>Result</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        agents.map((agent) => {
                          return(
                            <>
                              <tr>
                                <td>{agent.fullname}</td>
                                <td>Ward 3</td>
                                <td> 4 </td>
                                <td>Yes</td>
                                <td>
                                  <a href="#" class="btn btn-success btn-sm">View</a>
                                  <a href="#" class="btn btn-primary btn-sm">Edit</a>
                                  <a href="#" class="btn btn-danger btn-sm">Remove</a>
                                </td>
                              </tr>
                            </>
                          )
                        })
                      }
                    </tbody>
                  </table>
                </div>
                
              </div>
              
            </div>
            
          </div>
          
        </div>
        
      </section>
      
    </div>
    
    
        <Footer />
        
        <aside class="control-sidebar control-sidebar-dark">
          
        </aside>
        
      </div>
    </body>
    
      )
    }

export default All_agents;