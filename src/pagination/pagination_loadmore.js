import React, {useEffect, useState} from 'react';
import Pagination from '@material-ui/lab/Pagination';
import axios from 'axios';
import Card from "@material-ui/core/Card/Card";
import CardHeader from "@material-ui/core/CardHeader/CardHeader";
import Avatar from "@material-ui/core/Avatar/Avatar";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import FormControl from "@material-ui/core/FormControl/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import {Button} from "@material-ui/core";

export default function PaginationLoadMore() {

    const [pageSate,setPageState]=useState({pageNumber:0,
    isLoading:true,isError:false,pageData:[],totalPage:10,pageSize:10,isLoadingMoreData:false
    });

    const handleChangePage = () => {
       pageSate.pageNumber=pageSate.pageNumber+1;
       pageSate.isLoadingMoreData=true;
       setPageState({...pageSate,pageSate});
    };

    useEffect(()=>{
       getData();
    },[pageSate.pageNumber]);

    const getData=()=>{
        axios.get('https://api.instantwebtools.net/v1/passenger?page='+pageSate.pageNumber+'&size='+pageSate.pageSize).then(function (response) {
            pageSate.isLoading=false;
          let newData=pageSate.pageData.concat(response.data.data);
            pageSate.isLoadingMoreData=false;
           pageSate.pageData=newData;
            pageSate.totalPage=response.data.totalPages;
            setPageState({...pageSate,pageSate});

        });
    };
    const handleChange = (event) => {
        pageSate.pageSize=event.target.value;
        setPageState({...pageSate,pageSate});
        getData();
    };

    return (
        <div style={{maxWidth:700,margin:'auto'}}>
            <div>
                <FormControl>
                    <InputLabel id="demo-simple-select-label">Page Size</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        fullWidth={true}
                        value={pageSate.pageSize}
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={50}>50</MenuItem>
                        <MenuItem value={100}>100</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div>
                {pageSate.isLoading ? <CircularProgress/> :
                    pageSate.pageData.map((item)=>
                        <Card style={{marginTop:20}} key={item._id}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe">
                                        A
                                    </Avatar>
                                }
                                title={item.name}
                                subheader={"Trip: "+item.trips}
                            />
                        </Card>
                    )

                }

            <div style={{margin:'20px 0px'}}>
                {pageSate.isLoadingMoreData ? <CircularProgress/> :
                    <Button variant="contained" color="secondary" onClick={handleChangePage}>Load More</Button>
                }
            </div>
            </div>
        </div>
    )

}
