import React from 'react';
import PropTypes from 'prop-types';
import { Menu, makeStyles } from '@material-ui/core';
import ProjectMenuButton from './ProjectMenuButton';

// import _ from 'lodash';
import EditProjectButton from './EditProject/EditProjectButton';
import EditProject from './EditProject/EditProject';
import DeleteButton from '../../../../../../components/shared/MenuItems/DeleteButton';
import ProjectDelete from './DeleteProject/ProjectDelete';
import useProjectMenu from './useProjectMenu';

const useStyles = makeStyles(theme => ({
  menu: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: '10rem',
    borderBottomLeftRadius: '10rem',
    padding: '1rem',
  },
}));

const ProjectMenu = ({ projectId }) => {
  const classes = useStyles();
  const { state, updateOne, closeAll } = useProjectMenu();
  const { projectEdit, projectDelete, menuEle } = state;

  return (
    <div className={classes.menu}>
      <ProjectMenuButton
        handleClick={event => updateOne({ target: 'menuEle', value: event.currentTarget })}
      />
      <Menu autoFocus anchorEl={menuEle} open={Boolean(menuEle)} onClose={closeAll}>
        <EditProjectButton onClick={() => updateOne({ target: 'projectEdit', value: true })} />
        <DeleteButton onClick={() => updateOne({ target: 'projectDelete', value: true })} />
      </Menu>
      <EditProject open={projectEdit} handleClose={closeAll} projectId={projectId} />
      <ProjectDelete projectId={projectId} open={projectDelete} handleClose={closeAll} />
    </div>
  );
};

ProjectMenu.propTypes = {
  projectId: PropTypes.string.isRequired,
};

export default ProjectMenu;
