import React, { useState, useContext } from 'react';
import IconButton from '@material-ui/core/IconButton';
import IconSettings from '@material-ui/icons/Settings';
import IconArrowUp from '@material-ui/icons/KeyboardArrowUp';
import IconArrowDown from '@material-ui/icons/KeyboardArrowDown';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { ImageContext } from '../../Context/ImageContext';

const OpenImageSettings = () => {
  const [isOpen, setOpen] = useState(false);
  const { images, dispatch: imageDispatch } = useContext(ImageContext);

  return (
    <div className="open-image-settings">
      <IconButton onClick={() => setOpen(true)}>
        <IconSettings />
      </IconButton>
      <Dialog open={isOpen} handleClose={() => setOpen(false)}>
        <DialogTitle>Image Settings</DialogTitle>
        <DialogContent>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Re order</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {images.map(({ src }, i) => (
                <TableRow key={src}>
                  <TableCell>
                    {i !== 0 && (
                      <IconButton>
                        <IconArrowUp />
                      </IconButton>
                    )}
                    {i !== images.length - 1 && (
                      <IconButton>
                        <IconArrowDown />
                      </IconButton>
                    )}
                  </TableCell>
                  <TableCell>{src}</TableCell>
                  <TableCell />
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
      <style jsx>
        {`
          .open-image-settings {
            position: absolute;
            top: 0;
            left: 0;
            background-color: rgba(255, 255, 255, 0.3);
          }
        `}
      </style>
    </div>
  );
};

export default OpenImageSettings;
