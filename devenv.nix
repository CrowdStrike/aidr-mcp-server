{
  pkgs,
  lib,
  config,
  inputs,
  ...
}: {
  packages = with pkgs; [
    git
    pnpm
  ];
  starship.enable = true;
}
