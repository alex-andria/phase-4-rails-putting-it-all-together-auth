import { useEffect, useState } from "react";
import DailyProgressBar from "../components/DailyProgressBar";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";

function HabitList() {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    fetch("/habits")
      .then((r) => r.json())
      .then(setHabits);
  }, []);

  return (
    <Wrapper>
      {habits.length > 0 ? 
      (
        habits.map((habit) => (
          <Recipe key={habit.id}>
            <Box>
              <h2>{habit.habit_name}</h2>
              {/* <div>
                <br/>
                <h3>Description:</h3>
                <p>{habit.goal_description}</p>
                <br/>
                <h3>Number of days for goal:</h3>
                <p>{habit.goal_days}</p>
              </div> */}
              <DailyProgressBar />              
            </Box>
          </Recipe>
        ))

      ) : (

        <>
          <h2>Currently No Habits Being Tracked</h2>
          <Button as={Link} to="/new">
            Create a New Habit Tracker
          </Button>
        </>
      )}

    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

const Recipe = styled.article`
  margin-bottom: 24px;
`;

export default HabitList;
