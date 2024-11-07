import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, Collapse, Divider } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useNavigate, Link } from 'react-router-dom';
import "../styles/Sidebar.css";

const Sidebar = () => {
  const [openCareer, setOpenCareer] = useState(false);
  const [openLearningPath, setOpenLearningPath] = useState(false);
  const navigate = useNavigate();

  const handleCareerClick = () => {
    setOpenCareer(!openCareer);
    if (!openCareer) {
      navigate("/career"); // Navigate to the career page when opening
    }
  };

  const handleLearningPathClick = () => {
    setOpenLearningPath(!openLearningPath);
    if (!openLearningPath) {
      navigate("/learning"); // Navigate to the learning page when opening
    }
  };

  const scrollToSection = (sectionId, page) => {
    navigate(page, { state: { scrollTo: sectionId } }); // Pass the section ID and target page in state
  };

  return (
    <Drawer variant="permanent" anchor="left" className="sidebar">
      <List>
        <ListItem button component={Link} to="/dashboard">
          <ListItemText primary="Dashboard" />
        </ListItem>
        <Divider className="divider" />
        <ListItem button component={Link} to="/profile">
          <ListItemText primary="User Profile" />
        </ListItem>
        <Divider className="divider" />

        {/* Career Recommendations Section */}
        <ListItem button onClick={handleCareerClick}>
          <ListItemText primary="Career Recommendations" />
          {openCareer ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openCareer} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button onClick={() => scrollToSection('#career-suggestions', "/career")}>
              <ListItemText primary="Career Suggestions" />
            </ListItem>
            <ListItem button onClick={() => scrollToSection('#skill-match', "/career")}>
              <ListItemText primary="Skill Match Percentage" />
            </ListItem>
            <ListItem button onClick={() => scrollToSection('#emerging-fields', "/career")}>
              <ListItemText primary="Explore Emerging Fields" />
            </ListItem>
          </List>
        </Collapse>
        <Divider className="divider" />

        {/* Learning Path Section */}
        <ListItem button onClick={handleLearningPathClick}>
          <ListItemText primary="Learning Paths" />
          {openLearningPath ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openLearningPath} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button onClick={() => scrollToSection('#personalized-learning', "/learning")}>
              <ListItemText primary="Personalized Learning Paths" />
            </ListItem>
            <ListItem button onClick={() => scrollToSection('#progress-tracker', "/learning")}>
              <ListItemText primary="Progress Tracker" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
};

export default Sidebar;
