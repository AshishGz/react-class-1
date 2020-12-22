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

export default function PaginationPageNumber() {

    const [pageSate,setPageState]=useState({pageNumber:0,
    isLoading:true,isError:false,pageData:[],totalPage:10,pageSize:10
    });

    const handleChangePage = (event, newPage) => {
       pageSate.pageNumber=newPage-1;
       setPageState({...pageSate,pageSate});
    };

    useEffect(()=>{
       getData();
    },[pageSate.pageNumber]);

    const getData=()=>{
        axios.get('https://api.instantwebtools.net/v1/passenger?page='+pageSate.pageNumber+'&size='+pageSate.pageSize).then(function (response) {
            pageSate.isLoading=false;
            pageSate.pageData=response.data.data;
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
                        <Card style={{marginTop:20}}>
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
                <Pagination count={pageSate.totalPage}
                          onChange={handleChangePage}
                            variant="outlined" />
            </div>
            </div>
        </div>
    )

}
