import React from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  MenuItem,
  makeStyles,
  IconButton,
  Button,
  Paper,
} from "@material-ui/core";
import clsx from "clsx";
import MOCK_DATA from "./MOCK_DATA.json";
import { FixedSizeList } from "react-window";
import scrollbarWidth from "../../common/ScrollBarWidth";
import {
  useTable,
  useGlobalFilter,
  useBlockLayout,
  useAsyncDebounce,
} from "react-table";
import Search from "@material-ui/icons/Search";
import CalendarToday from "@material-ui/icons/CalendarToday";
import AddBox from "@material-ui/icons/AddBox";
import Cached from "@material-ui/icons/Cached";

function Stocks(props) {
  const classes = useStyles();
  const columns = React.useMemo(() => COLUMNS, []);
  const data = React.useMemo(() => MOCK_DATA, []);
  const scrollbarSize = React.useMemo(() => scrollbarWidth(), []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
    totalColumnsWidth,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useBlockLayout
  );

  const { globalFilter } = state;

  const [filter, setFilter] = React.useState(globalFilter);
  const [loading, setLoading] = React.useState(false);

  const handleFilterInputDelay = useAsyncDebounce((value) => {
    setLoading(false);
    setGlobalFilter(value || undefined);
  }, 1000);

  return (
    <Box display="flex" flex={1} flexDirection="column" p={10}>
      <Box
        p={10}
        mb={10}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box display="flex" alignItems="center">
          <Box mr={20}>
            <Typography variant="h4">In Stock</Typography>
          </Box>
          <Box mr={20}>
            <TextField
              variant="outlined"
              placeholder="Quick Search"
              value={filter || ""}
              onChange={(e) => {
                setFilter(e.target.value);
                setLoading(true);
                handleFilterInputDelay(e.target.value);
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {loading === true ? <Cached /> : <Search />}
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box display="flex" alignItems="center">
            <Box mr={5}>
              <Typography
                variant="caption"
                style={{ fontWeight: "bold", fontSize: "1.1em" }}
              >
                Status
              </Typography>
            </Box>
            <TextField
              variant="outlined"
              select
              value="All"
              className={classes.textField}
            >
              {status.map((status) => (
                <MenuItem value={status} key={status}>
                  {status}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <Box bgcolor="gray" ml={10}>
            <IconButton>
              <CalendarToday />
            </IconButton>
          </Box>
        </Box>
        <Box>
          <Button
            variant="contained"
            endIcon={<AddBox />}
            color="primary"
            style={{ textTransform: "revert" }}
            size="large"
          >
            New Order
          </Button>
        </Box>
      </Box>
      <Box display="flex" overflow="auto" justifyContent="center">
        <Paper
          variant="outlined"
          {...getTableProps()}
          className={classes.table}
        >
          <Box className={classes.th}>
            {headerGroups.map((headerGroup) => (
              <Box {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <Box
                    {...column.getHeaderProps({
                      className: classes.td,
                    })}
                  >
                    {column.render("Header")}
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
          <Box {...getTableBodyProps()}>
            <FixedSizeList
              height={650}
              itemSize={35}
              itemCount={rows.length}
              width={totalColumnsWidth + scrollbarSize}
            >
              {({ index, style }) => {
                const row = rows[index];
                prepareRow(row);
                return (
                  <Box
                    {...row.getRowProps({
                      ...style,
                    })}
                  >
                    {row.cells.map((cell) => (
                      <Box
                        {...cell.getCellProps({
                          className: clsx(classes.tr_cell, {
                            [classes.tr_cell_inProgress]:
                              cell.value === "In Progress",
                            [classes.tr_cell_completed]:
                              cell.value === "Completed",
                            [classes.tr_cell_advNotification]:
                              cell.value === "Advance notification",
                          }),
                        })}
                      >
                        {cell.render("Cell")}
                      </Box>
                    ))}
                  </Box>
                );
              }}
            </FixedSizeList>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

export default Stocks;

const status = ["All", "Completed", "In progress", "Advance notification"];

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "33ch",
  },
  table: {
    display: "inline-block",
    borderCollapse: "collapse",
    "& $th, $tr_cell": {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
  },
  th: {
    padding: 10,
  },
  td: {
    color: theme.palette.grey[500],
  },
  tr_cell: {
    padding: 10,
   
  },
  tr_cell_completed: {
    color: theme.palette.success.main,
  },
  tr_cell_inProgress: {
    color: theme.palette.warning.main,
  },
  tr_cell_advNotification: {
    color: theme.palette.info.main,
  },
}));

const COLUMNS = [
  {
    Header: "Product Code",
    accessor: "id",
  },
  {
    Header: "Product",
    accessor: "product",
    width: 300,
  },
  {
    Header: "Special Instructions",
    accessor: "special_instructions",
    width: 300,
  },
  {
    Header: "Status",
    accessor: "status",
    width: 300,
  },
  {
    Header: "Date",
    accessor: "date",
    width: 300,
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
];
