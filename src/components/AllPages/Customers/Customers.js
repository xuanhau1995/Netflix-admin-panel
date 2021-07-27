import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TicketIcon,
  ClockIcon,
  ArrowDownIcon,
  ChevronDownIcon,
} from "@heroicons/react/solid";
import Actionsbtn from "./Btns/Actionsbtn";
import ButtonsAction from "./Btns/ButtonsAction";
import VisaImg from "../../image/Visa.png";
import MasterCardImg from "../../image/MasterCard_Logo.png";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { dataUser } from "./DataUser";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  TableContainer: {
    background: "#0000",
  },
  TableCell: {
    color: "#ffff",
    paddingLeft: 0,
    paddingRight: 0,
    borderColor: "#2b2b2a",
    height: 66,
  },
});
function Customers() {
  const classes = useStyles();
  return (
    <div className="text-white card-light">
      <ButtonsAction />
      {/* This is Tabel list customer */}
      <TableContainer component={Paper} className={classes.TableContainer}>
        <Table>
          <TableHead>
            <TableRow className={classes.TableRow}>
              <TableCell className={classes.TableCell} align="left">
                <p className="cell-th">Customer Name</p>
              </TableCell>
              <TableCell className={classes.TableCell} align="left">
                <p className="cell-th">Phone</p>
              </TableCell>
              <TableCell className={classes.TableCell} align="left">
                <p className="cell-th">Email</p>
              </TableCell>
              <TableCell className={classes.TableCell} align="left">
                <p className="cell-th">Payment Method</p>
              </TableCell>
              <TableCell className={classes.TableCell} align="center">
                <p className="cell-th">Status</p>
              </TableCell>
              <TableCell className={classes.TableCell} align="left">
                <p className="cell-th">Join Date</p>
              </TableCell>
              <TableCell className={classes.TableCell} align="right">
                <p className="cell-th">Actions</p>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {dataUser.map((user) => (
              <TableRow key={user.name}>
                {/* Name  */}
                <TableCell
                  className={classes.TableCell}
                  component="th"
                  scope="row"
                >
                  <div className="flex items-center space-x-3">
                    <div>
                      <img className="h-11 w-11 rounded-md" src={user.avatar} />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">{user.name}</p>
                      {user.typeAccount === "Premium" && (
                        <p className="Premium-acc">
                          <TicketIcon className="h-4 pr-1" />
                          Premium User
                        </p>
                      )}
                      {user.typeAccount === "Trial" && (
                        <p className="Trial-acc">
                          <ClockIcon className="h-4 pr-1" />
                          Trial
                        </p>
                      )}
                    </div>
                  </div>
                </TableCell>
                {/* End name */}
                <TableCell className={classes.TableCell} align="left">
                  <p className="cell-td">{user.phone}</p>
                </TableCell>
                <TableCell className={classes.TableCell} align="left">
                  <p className="cell-td"> {user.mail}</p>
                </TableCell>
                {/* Payment Method */}
                <TableCell className={classes.TableCell} align="left">
                  {/* Visa */}
                  {user.paymentMethod.type === "Visa" && (
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-6 bg-gray-50 rounded-md justify-center items-center flex">
                        <img className="h-2" src={VisaImg} />
                      </div>
                      <p className="cell-td">
                        **** {user.paymentMethod.number}
                      </p>
                    </div>
                  )}
                  {/* Master Card */}
                  {user.paymentMethod.type === "MasterCard" && (
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-6 bg-gray-50 rounded-md justify-center items-center flex">
                        <img className="h-4" src={MasterCardImg} />
                      </div>
                      <p className="cell-td">
                        **** {user.paymentMethod.number}
                      </p>
                    </div>
                  )}
                </TableCell>
                {/* End Payment method */}
                {/* Status */}
                <TableCell className={classes.TableCell} align="center">
                  <p className="cell-td">
                    {user.status === "Active" && (
                      <div className="active-tag">{user.status}</div>
                    )}
                    {user.status === "Pending" && (
                      <div className="pending-tag">{user.status}</div>
                    )}
                    {user.status === "Block" && (
                      <div className="block-tag">{user.status}</div>
                    )}
                  </p>
                </TableCell>
                {/* End Status */}
                <TableCell className={classes.TableCell} align="left">
                  <p className="cell-td">{user.joinDate}</p>
                </TableCell>
                {/* Actions */}
                <TableCell className={classes.TableCell} align="right">
                  <p className="cell-td">
                    <Actionsbtn />
                  </p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Customers;
