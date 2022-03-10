import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { Button, Error, FormField, Input, Label, Textarea } from "../styles";

function NewHabit({ user }) {
  const [habitNameInput, setHabitNameInput] = useState('');
  const [goalDescriptionInput, setGoalDescriptionInput] = useState('');
  const [goalDaysInput, setGoalDaysInput] = useState('');
  const [habitColorInput, setHabitColorInput] = useState('');
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/habits", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        habit_name: habitNameInput,
        goal_description: goalDescriptionInput,
        goal_days: goalDaysInput,
        user_id: user.id,
        color_code: habitColorInput,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        history.push("/");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <Wrapper>
      <WrapperChild>
        <h2>Create Habit</h2>
        <form onSubmit={handleSubmit}>

          {/*habitNameInput*/}
          <FormField>
            <Label htmlFor="habitNameInput">Name</Label>
            <Input
              type="text"
              id="habitNameInput"
              value={habitNameInput}
              onChange={(e) => setHabitNameInput(e.target.value)}
            />
          </FormField>

          {/* goalDescriptionInput */}
          <FormField>
            <Label htmlFor="goalDescriptionInput">Goal Description</Label>
            <Textarea
              id="goalDescriptionInput"
              value={goalDescriptionInput}
              onChange={(e) => setGoalDescriptionInput(e.target.value)}
            />
          </FormField>

          {/* goalDaysInput */}
          <FormField>
            <Label htmlFor="goalDaysInput">Number of Days to Track Habit:</Label>
            <Input
              id="goalDaysInput"
              type="number"
              value={goalDaysInput}
              onChange={(e) => setGoalDaysInput(e.target.value)}
            />
          </FormField>

          {/* habitColorInput */}
          <FormField>
            <Label htmlFor="habitColorInput">Select Color for Habit</Label>
            <Input
              id="habitColorInput"
              type="color"
              value={habitColorInput}
              onChange={(e) => setHabitColorInput(e.target.value)}
            />
          </FormField>        

          <FormField>
            <Button color="primary" type="submit">
              {isLoading ? "Loading..." : "Submit Habit"}
            </Button>
          </FormField>

          <FormField>
            {errors.map((err) => (
              <Error key={err}>{err}</Error>
            ))}
          </FormField>
        </form>

      </WrapperChild>
      <WrapperChild>
        <h1></h1>
        <p>
           Wrapper Child
        </p>
      </WrapperChild>
    </Wrapper>

  );
}

const Wrapper = styled.section`
  max-width: 1000px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
  gap: 24px;
`;

const WrapperChild = styled.div`
  flex: 1;
`;

export default NewHabit;
