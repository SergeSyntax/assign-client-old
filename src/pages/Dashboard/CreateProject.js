import React from 'react';
import { createProject } from 'actions/projects';
import ProjectFormDialog from './ProjectFormDialog/ProjectFormDialog';
import CreateProjectButton from './CreateProjectButton';

const CreateProject = () => {
  return <ProjectFormDialog OpenDialogButton={CreateProjectButton} submitAction={createProject} />;
};

export default CreateProject;
