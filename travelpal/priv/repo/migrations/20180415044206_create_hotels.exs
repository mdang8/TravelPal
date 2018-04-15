defmodule Travelpal.Repo.Migrations.CreateHotels do
  use Ecto.Migration

  def change do
    create table(:hotels) do
      add :name, :string
      add :district, :text
      add :price, :float
      add :link, :text
      add :rating, :float

      timestamps()
    end

  end
end
