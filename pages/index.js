import React, { Component } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { DataGrid } from '@mui/x-data-grid';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  backgroundColor: "#d3d3d3"
}));


const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
    backgroundColor:"gray"
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'S', firstName: 'Balasubramani', age: 35 },
  { id: 2, lastName: 'S', firstName: 'Senthil', age: 42 },
  { id: 3, lastName: 'M', firstName: 'Mani', age: 45 },
  { id: 4, lastName: 'M', firstName: 'Purusoth', age: 16 },
  { id: 5, lastName: 'A', firstName: 'Aishwarya', age: 60 },
  { id: 6, lastName: 'Melisandre', firstName: "Jon", age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];



class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: ["Bala", "Senthil", "Kumar", "Raja", "Mani", "Vadivel", "Shiva", "Murugan"]
    }
  }



  render() {
    
    return (
      <div className={styles.container}>
        <Head>
          <title>SAMPLE APP</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>          
        <h1 style ={{margin:10, color:"green"}}> SAMPLE APP</h1>

          {/* <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              {this.state.data.map((item, index) =>
                <Grid key={index} item xs={6}>
                  <Item >{item}</Item>
                </Grid>
              )}
            </Grid>
          </Box> */}


      <div style={{ height: 400, width: '80%', marginTop:20 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[8]}
        checkboxSelection
        disableSelectionOnClick
        />
    </div>


        </main>
        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              Bala
            </span>
          </a>
        </footer>
      </div>
    );
  }
}
export default Home;






