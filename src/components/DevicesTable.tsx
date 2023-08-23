import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Container from "@mui/material/Container";

import formatImageUrl from "../../data/images";

export default function DevicesTable({ tableData }: { tableData: any }) {
  return (
    <TableContainer
      component={Container}
      sx={{ marginY: 3, maxHeight: "80vh" }}
    >
      <Table aria-label="Devices table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "gray" }}>
              {tableData?.length} devices
            </TableCell>
            <TableCell component="th">PRODUCT LINE</TableCell>
            <TableCell component="th">NAME</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData
            ? tableData.map((row: any) => (
                <TableRow
                  key={row.id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    ":hover": { backgroundColor: "#eee", cursor: "pointer" },
                  }}
                  onClick={() => {
                    console.log("click", row?.icon?.id);
                    window.location.href = "./device";
                  }}
                >
                  <TableCell>
                    <img
                      src={formatImageUrl(
                        row?.icon?.id,
                        row?.icon?.resolutions[0][0],
                        row?.icon?.resolutions[0][1]
                      )}
                      alt={row?.line?.name}
                      // height={"65px"}
                      // width={"65px"}
                    />
                  </TableCell>
                  <TableCell scope="row">{row?.line?.name}</TableCell>
                  <TableCell scope="row">{row?.product?.name}</TableCell>
                </TableRow>
              ))
            : "No Data"}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
