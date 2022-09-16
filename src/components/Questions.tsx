import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const Questions = () => {
  const [questions, setQuestions] = useState<Question[]>();

  const columns: GridColDef[] = [
    { field: "question_id", headerName: "ID", width: 90 },
    {
      field: "title",
      headerName: "Title",
      width: 650,
      editable: true,
    },
    {
      field: "is_answered",
      headerName: "isAnswered",
      width: 150,
      editable: true,
    },
    {
      field: "score",
      headerName: "Score",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "tags",
      headerName: "Tags",
      sortable: false,
      width: 160,
    },
    {
      field: "answer_count",
      headerName: "Answers",
      sortable: false,
      width: 160,
    },
  ];

  const rows: Question[] = questions ? questions : [];

  type Question = {
    question_id?: number;
    title?: string;
    is_answered?: boolean;
    score?: number;
    tags?: string[];
    link?: string;
    answer_count?: number;
  };

  const getQuestions = async () => {
    try {
      await axios
        .get(
          "https://api.stackexchange.com/2.3/questions?fromdate=1661990400&order=desc&sort=votes&site=stackoverflow",
          {
            headers: {
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setQuestions(res.data.items);
        });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("Error:", error.message);
        return error.message;
      } else {
        console.log("Unexpected Error:", error);
        return "An unexpected error occurred";
      }
    }
  };

  useEffect(() => {
    getQuestions().catch((err) => {
      console.log(err);
    });
  }, [questions]);

  return (
    <div className="h-96">
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          getRowId={(row: any) => row.question_id}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </div>
  );
};

export default Questions;
