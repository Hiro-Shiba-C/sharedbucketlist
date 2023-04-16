let ideas = [];

function addIdea() {
  const ideaInput = document.getElementById("ideaInput");
  const idea = ideaInput.value.trim();
  if (idea === "") {
    return;
  }
  ideas.push({
    text: idea,
    votes: 0
  });
  ideaInput.value = "";
  renderIdeas();
}

function renderIdeas() {
  const ideaList = document.getElementById("ideaList");
  ideaList.innerHTML = "";
  ideas
    .sort((a, b) => b.votes - a.votes)
    .forEach((idea, index) => {
      const li = document.createElement("li");
      li.setAttribute("id", `idea${index}`);
      const textNode = document.createTextNode(`${index + 1}: ${idea.text} (${idea.votes})`);
      const voteButton = document.createElement("button");
      voteButton.textContent = "投票する";
      voteButton.addEventListener("click", () => {
        idea.votes++;
        renderIdeas();
      });
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "削除する";
      deleteButton.addEventListener("click", () => {
        ideas.splice(index, 1);
        const targetId = `idea${index}`;
        const targetElement = document.getElementById(targetId);
        targetElement.remove();
      });
      li.appendChild(textNode);
      li.appendChild(voteButton);
      li.appendChild(deleteButton);
      ideaList.appendChild(li);
    });
}
