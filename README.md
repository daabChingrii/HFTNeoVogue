![NewVogueHB](https://github.com/daabChingrii/HFTNeoVogue/assets/92100787/e1a8df86-beb4-4a89-b068-971fb52744b3)

# HacktoberFest: NeoVogue
“Fast Fashion” is the quick production of cheap and trendy clothes that prioritizes meeting consumer demand for the latest styles. Fast Fashion brands are known for designing and bringing new clothing to the market in a matter of a few weeks. These retailers frequently update their inventory to keep up with seasonal and trend-driven fashion changes. This means that they often have new collections or items available for purchase every few weeks.

NeoVogue is a website that collaborates with Designers, Developers, and Content Creators alike.

## How to contribute?
- Fork this repository (Click the fork button in the top right of this page, click your Profile Image)
- Clone your forked copy of the project (`git clone https://github.com/<your_user>/neovogue`)
- Navigate into the folder `cd neovogue`
- Add a reference(remote) to the original repo to pull the latest code from upstream (i.e., Neovogue/Neovog
ue):
```bash
$ git remote add upstream https://github.com/Neovogue/Neovogue
```
- Check the remotes for this repository using:
```bash
$ git remote -v
origin  https://github.com/<your_user>/neovogue (fetch)
origin  https://github.com/<your_user>/neovogue (push)
upstream        https://github.com/Neovogue/Neovogue (fetch)
upstream        https://github.com/Neovogue/Neovogue (push)
```
- Now, let's create a new branch!
```bash
# It will create a new branch with name Branch_Name and switch to it
$ git checkout -b <Branch_Name>
```
- Create a file named `<username>.html`. For example, if you are contributing as 'Ashutosh' then make sure there exists an HTML
- Make necessary changes and commit those changes
```bash
# To add all files to the staging area
$ git add .
# To add a specific file to the staging area use:
$ git add <some_file>
# Type in a message relevant to the code reviewer using:
$ git commit -m '<relevant message>'
```
- Push your awesome work to your remote repository using:
```bash
# First push your local branch to your remote repository
$ git push origin <Branch_Name>
```
- Create a [PR](https://help.github.com/en/articles/creating-a-pull-request)!

## HacktoberFest Guidelines to making your first PR:
PR/MRs that are labeled with a label containing the word “spam” by maintainers will not be counted.

HacktoberFest uses the Node.js 18 RegEx engine with /\bspam\b/i to look for spam labels.
PR/MRs that also have the “hacktoberfest-accepted” label cannot be marked as spammy via a label.
PR/MRs that have been merged and do not have a label containing the word “invalid” cannot be marked as spammy via a label.
PR/MRs that the system detects as spammy will also not be counted.

Any user with two or more spammy PR/MRs will be disqualified.

Remember: Quantity is fun, Quality is key.
