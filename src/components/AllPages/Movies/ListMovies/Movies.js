import { DataGrid } from "@material-ui/data-grid";
import * as React from "react";
import { useState } from "react";
import { dataMovies } from "./moviesdata";
import { makeStyles } from "@material-ui/core/styles";
import MovieBtnHeader from "./MovieBtnHeader";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { flex } from "tailwindcss/defaultTheme";
import BtnAction from "./BtnAction";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  TableContainer: {
    background: "#1C1C1C",
    boxShadow: "0 0px 0px 0px rgba(255, 105, 135, .3)",
  },
  TableCell: {
    color: "#ffff",
    paddingLeft: 0,
    borderColor: "#2b2b2a",
    height: 66,
  },
  TableCellR: {
    borderColor: "#2b2b2a",
    height: 66,
    paddingLeft: 0,
    paddingRight: 0,
  },
});
export default function Movies() {
  const classes = useStyles();

  return (
    <div className="card-light">
      <MovieBtnHeader />
      <TableContainer component={Paper} className={classes.TableContainer}>
        <TableContainer>
          <TableHead>
            <TableRow className={classes.TableRow}>
              <TableCell className={classes.TableCell} width="400" align="left">
                <p className="cell-th">Movies</p>
              </TableCell>

              <TableCell className={classes.TableCell} align="center">
                <p className="cell-th">Status</p>
              </TableCell>
              <TableCell className={classes.TableCell} align="center">
                <p className="cell-th">User Scored</p>
              </TableCell>
              <TableCell className={classes.TableCell} align="left">
                <p className="cell-th">Language</p>
              </TableCell>
              <TableCell className={classes.TableCell} width="100" align="left">
                <p className="cell-th">Popularity</p>
              </TableCell>
              <TableCell className={classes.TableCell} align="left">
                <p className="cell-th">Episode</p>
              </TableCell>
              <TableCell className={classes.TableCell} width="100" align="left">
                <p className="cell-th">Release Date</p>
              </TableCell>
              <TableCell className={classes.TableCell} width="120" align="left">
                <p className="cell-th">Director</p>
              </TableCell>
              <TableCell className={classes.TableCell} width="160" align="left">
                <p className="cell-th">Cast</p>
              </TableCell>
              <TableCell className={classes.TableCellR} align="right">
                <p className="cell-th">Actions</p>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataMovies.map((movie, index) => (
              <TableRow key={index}>
                <TableCell className={classes.TableCell}>
                  <div className="flex items-center cell-td space-x-3">
                    <div className="relative">
                      <img
                        className="h-14 w-14 rounded-md object-cover"
                        src={movie.poster_path}
                      />
                    </div>
                    <div className="">
                      <p className="text-brand-200 line-clamp-1">
                        {movie.original_title}
                      </p>
                      <p className="text-sm">{movie.categories}</p>
                      <span className="flex space-x-1">
                        <p className="text-xs mr-1">
                          Vote : {movie.vote_average}
                        </p>
                        •<p className="text-xs">{movie.vote_count}</p>
                      </span>
                    </div>
                  </div>
                </TableCell>

                <TableCell className={classes.TableCell} align="center">
                  <p className="cell-td">
                    {movie.status === "Actived" && (
                      <div className="active-tag">{movie.status}</div>
                    )}
                    {movie.status === "Inprocess" && (
                      <div className="pending-tag">{movie.status}</div>
                    )}
                    {movie.status === "Block" && (
                      <div className="block-tag">{movie.status}</div>
                    )}
                  </p>
                </TableCell>
                <TableCell className={classes.TableCell} align="center">
                  <div className="flex justify-center">
                    <div className="h-10 w-10 bg-brand-700 rounded-full flex justify-center items-center">
                      <div className="h-9 w-9 rounded-full border-2 border-green-500 flex justify-center items-center">
                        <div className="flex">
                          <p className="text-xs font-bold">{movie.userScore}</p>
                          <p className="text-[5px] mt-[3px]">%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className={classes.TableCell} align="left">
                  <p className="cell-td"> {movie.original_language}</p>
                </TableCell>
                <TableCell className={classes.TableCell} align="left">
                  <p className="cell-td"> {movie.popularity}</p>
                </TableCell>
                <TableCell className={classes.TableCell} align="left">
                  <p className="cell-td whitespace-nowrap"> {movie.episode}</p>
                </TableCell>
                <TableCell className={classes.TableCell} align="left">
                  <p className="cell-td"> {movie.release_date}</p>
                </TableCell>
                <TableCell className={classes.TableCell} align="left">
                  <p className="cell-td flex items-start"> {movie.director}</p>
                </TableCell>
                <TableCell className={classes.TableCell} align="left">
                  <p className="cell-td line-clamp-2"> {movie.cast}</p>
                </TableCell>
                <TableCell className={classes.TableCellR} align="right">
                  <BtnAction />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableContainer>
      </TableContainer>
    </div>
  );
}
