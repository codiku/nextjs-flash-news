
commitId=$1
shift
for branch in "$@"
do
  echo 
  git checkout $branch
  git cherry-pick $commitId
  git push origin $branch
done

# branches=$(git branch | tr -d '*' | tr -d ' ')
# echo $branches
